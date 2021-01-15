export const getErrorSelector = (state)=> state.profilePage.error
export const getProfileSelector = (state)=> state.profilePage.profile
export const getStatusSelector = (state)=> state.profilePage.status
export const getisFetchingSelector = (state)=> state.profilePage.isFetching
export const getAuthUserIDSelector = (state)=> state.auth.id
export const getIsUserFollowedSelector = (state)=> state.profilePage.isUserFollowed
export const getFollowingInProgressSelector = (state)=> state.usersPage.followingInProgress
export const getUsersSelector = (state)=> state.usersPage.users