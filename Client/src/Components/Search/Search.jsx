import React, { useContext, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { Middle } from "../Home/HomeStyles";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  BioDiv,
  Container,
  FollowBtn,
  GroupCountDiv,
  GroupNameDiv,
  GroupPic,
  GroupPicDiv,
  GroupTitleDiv,
  GroupTopDiv,
  IconDiv,
  IconDivText,
  Left,
  LeftNavDiv,
  LeftNavItem,
  LeftPanelHeading,
  LeftSmallHeading,
  LoadingImg,
  NameDiv,
  OffsetNav,
  PostDiv,
  ProfilePic,
  ProfilePicDiv,
  ProfileTitleDiv,
  ProfileTopDiv,
  Right,
  RightSideCard,
  Rotate,
  SearchCards,
  SearchCountDiv,
  SeeMoreDiv,
  UsernameDiv,
} from "./SearchStyles";
import { MdVerified } from "react-icons/md";
import { GroupTitle } from "../Groups/GroupStyles";

export const Search = ({ q }) => {
  const [data, setData] = useState({ users: [], groups: [], isLoading: true });
  const { user: loggedInUser, token } = useContext(AuthContext);
  const str = useLocation().search;
  const query = new URLSearchParams(str).get("q");
  const history = useHistory();
  // To follow/ unfollow search results users
  const handleFollow = async (id, action) => {
    axios
      .patch(
        `https://secure-ravine-45527.herokuapp.com/users/${id}/${action}`,
        {},
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((res) => {
        fetchData(query);
      });
  };

  const fetchData = async (q) => {
    alert("claled");
    setData({ ...data, isLoading: true });
    let users;
    await axios
      .get(`https://secure-ravine-45527.herokuapp.com/users/search?q=${q}`)
      .then((res) => {
        users = res.data.users;
      });
    let groups;
    await axios
      .get(`https://secure-ravine-45527.herokuapp.com/groups/search?q=${q}`)
      .then((res) => {
        groups = res.data.groups;
      });

    if (users && groups) setData({ ...data, users, groups, isLoading: false });
  };
  useEffect(() => {
    fetchData(query);
  }, []);

  return (
    <>
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

        <></>

        <Middle>
          {data.isLoading ? (
            <Rotate>
              <LoadingImg
                src="https://cdn-icons-png.flaticon.com/512/39/39979.png"
                alt="loader"
              />
            </Rotate>
          ) : (
            <>
              <PostDiv>
                <SearchCards head={true}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <div>People</div>
                    <SeeMoreDiv
                      onClick={() => {
                        alert();
                      }}
                    >
                      See more
                    </SeeMoreDiv>
                  </div>
                  <SearchCountDiv>
                    showing {data?.users?.length > 4 ? 4 : data?.users?.length}{" "}
                    of {data?.users?.length} results
                  </SearchCountDiv>
                </SearchCards>

                {data?.users?.map((user) => (
                  <>
                    <SearchCards key={user?._id} head={false}>
                      <ProfileTopDiv>
                        <ProfilePicDiv>
                          <ProfilePic
                            src={user?.profile_pic}
                            alt="profile pic"
                          />
                        </ProfilePicDiv>
                        <ProfileTitleDiv>
                          <NameDiv>
                            {user?.display_name}{" "}
                            {user?.isVerified && (
                              <span
                                style={{
                                  marginLeft: "5px",
                                  marginTop: "8px",
                                  paddingTop: "5px",
                                }}
                              >
                                <MdVerified
                                  style={{ paddingTop: "5px" }}
                                  size="1.2em"
                                  color="#3E99ED"
                                />
                              </span>
                            )}{" "}
                          </NameDiv>
                          <UsernameDiv>@{user?.username}</UsernameDiv>
                        </ProfileTitleDiv>

                        {user?.followers?.includes(loggedInUser?._id) ? (
                          <FollowBtn
                            type="Following"
                            onClick={() => handleFollow(user?._id, "unfollow")}
                          >
                            Following
                          </FollowBtn>
                        ) : (
                          <FollowBtn
                            onClick={() => handleFollow(user?._id, "follow")}
                            type="Follow"
                          >
                            Follow
                          </FollowBtn>
                        )}
                      </ProfileTopDiv>
                      <BioDiv>{user?.bio}</BioDiv>
                    </SearchCards>
                  </>
                ))}
              </PostDiv>

              <PostDiv>
                <SearchCards head={true}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <div>Groups</div>
                    <SeeMoreDiv
                      onClick={() => {
                        history.push("/groups");
                      }}
                    >
                      See more
                    </SeeMoreDiv>
                  </div>
                  <SearchCountDiv>
                    showing{" "}
                    {data?.groups?.length > 4 ? 4 : data?.groups?.length} of
                    {data?.groups?.length} results
                  </SearchCountDiv>
                </SearchCards>

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
                      </GroupTopDiv>
                    </SearchCards>
                  </>
                ))}
              </PostDiv>
            </>
          )}
        </Middle>

        <Right>
          <RightSideCard>Sponsered</RightSideCard>
        </Right>
      </Container>
    </>
  );
};
