import React, { useContext, useEffect, useState } from "react";
import {
  AboutDiv,
  AboutItem,
  AboutRow,
  Container,
  GroupCountDiv,
  GroupDetailsDiv,
  GroupFollowersCount,
  GroupImg,
  GroupImgDiv,
  GroupNameDiv,
  GroupPic,
  GroupPicDiv,
  GroupTitle,
  GroupTitleDiv,
  GroupTopDiv,
  GroupWrapper,
  IconDiv,
  IconDivText,
  Left,
  LeftNavDiv,
  LeftNavItem,
  LeftPanelHeading,
  LeftSmallHeading,
  Middle,
  OffsetNav,
  PostDiv,
  Right,
  RightSideCard,
  SearchCards,
  JoinGrpBtn,
  ShowAllDiv,
} from "./GroupListStyles";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { AuthContext } from "../../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
export const GroupList = () => {
  const { user, token } = useContext(AuthContext);
  const history = useHistory();
  const [data, setData] = useState({ groups: [], isLoading: true });

  const fetchData = async () => {
    setData({ ...data, isLoading: true });
    await axios
      .get("https://secure-ravine-45527.herokuapp.com/groups", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        console.log(res.data);
        setData({ ...data, groups: res.data, isLoading: false });
      });
  };

  const handleJoin = async (group_id) => {
    const headers = { Authorization: "Bearer " + token };
    await axios
      .patch(
        `https://secure-ravine-45527.herokuapp.com/groups/join/${group_id}`,
        {},
        { headers }
      )
      .then((res) => {
        alert(res);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <OffsetNav />
      <Container>
        <Left>
          <LeftPanelHeading>Explore</LeftPanelHeading>
          <LeftSmallHeading>Menu</LeftSmallHeading>
          <LeftNavDiv>
            <LeftNavItem>
              <IconDiv>
                <AiFillHome size="1rem" />
              </IconDiv>
              <IconDivText>Home</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <MdNotifications size="1rem" />
              </IconDiv>
              <IconDivText>Notifications</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <IoChatbubblesSharp size="1rem" />
              </IconDiv>
              <IconDivText>Chats</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <AiFillHome size="1rem" />
              </IconDiv>
              <IconDivText>Groups</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <BsGlobe2 size="1rem" />
              </IconDiv>
              <IconDivText>Explore</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <TiDocumentText size="1rem" />
              </IconDiv>
              <IconDivText>News</IconDivText>
            </LeftNavItem>
          </LeftNavDiv>
        </Left>

        {!data.isLoading ? (
          <>
            <Middle>
              <PostDiv>
                Featured
                {data?.groups?.map((group) => (
                  <>
                    <SearchCards key={group?._id} head={false}>
                      <GroupTopDiv>
                        <GroupPicDiv>
                          <GroupPic src={group?.cover_photo} alt="cover pic" />
                        </GroupPicDiv>
                        <GroupTitleDiv>
                          <GroupNameDiv>{group?.group_name} </GroupNameDiv>
                          <GroupCountDiv>
                            {group?.members?.length} Followers
                          </GroupCountDiv>
                        </GroupTitleDiv>
                        {console.log(group?.members?.includes(user?._id))}
                        {group?.members?.includes(user?._id) ? (
                          <JoinGrpBtn
                            onClick={() => {
                              handleJoin(group?._id);
                            }}
                            isJoined={true}
                          >
                            Member
                          </JoinGrpBtn>
                        ) : (
                          <JoinGrpBtn
                            onClick={() => {
                              handleJoin(group?._id);
                            }}
                            isJoined={true}
                          >
                            Join
                          </JoinGrpBtn>
                        )}
                      </GroupTopDiv>
                    </SearchCards>
                  </>
                ))}
              </PostDiv>
            </Middle>

            <Right>
              <RightSideCard>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <div>Groups you're in</div>
                  <ShowAllDiv
                    onClick={() => {
                      history.push("/groups/browse/member");
                    }}
                  >
                    Show all
                  </ShowAllDiv>
                </div>
              </RightSideCard>

              <RightSideCard>
                {user?.groups?.map((group) => (
                  <GroupWrapper
                    onClick={() => history.push(`/groups/${group?._id}`)}
                  >
                    <GroupImgDiv>
                      <GroupImg src={group?.cover_photo} alt="group cover" />
                    </GroupImgDiv>
                    <GroupDetailsDiv>
                      <GroupTitle>{group?.group_name}</GroupTitle>
                      <GroupFollowersCount>
                        {group?.members?.length} Members
                      </GroupFollowersCount>
                    </GroupDetailsDiv>
                  </GroupWrapper>
                ))}
              </RightSideCard>
              <AboutDiv>
                <AboutRow>
                  <AboutItem>Help</AboutItem>.<AboutItem>Security</AboutItem>.
                  <AboutItem>About</AboutItem>.<AboutItem>Investors</AboutItem>
                  <AboutItem>Terms of sale</AboutItem>.
                  <AboutItem>DMCA</AboutItem>
                </AboutRow>

                <AboutRow>
                  <AboutItem>Term sof service</AboutItem>.
                  <AboutItem>Privacy policy</AboutItem>.
                  <AboutItem>Status</AboutItem>.<AboutItem>Logout</AboutItem>
                </AboutRow>
                <AboutRow>
                  <AboutItem>© 2021 Gab AI, Inc.</AboutItem>
                </AboutRow>
                <AboutRow>
                  <AboutItem>Gab Social is open source software</AboutItem>
                  <AboutItem>code.gab</AboutItem>
                </AboutRow>
              </AboutDiv>
            </Right>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};
