import axios from 'axios';

export const fetchProfileSuccess = (data) => ({
  type: 'FETCH_PROFILE_SUCCESS',
  data: {
    image: data.avatar_url,
    name: data.name,
  },
})

export const fetchProfileError = () => ({
  type: 'FETCH_PROFILE_ERROR',
  data: {
    error: true
  },
})

export const fetchProfile = (urlGithub) => async (dispatch, getState) => {
  try {
    const response = await axios.get(urlGithub)
    if (response.status !== 200) {
      throw Error(response.statusText);
    }
    dispatch(fetchProfileSuccess(response.data))
    return response;
  } catch (err) {
    dispatch(fetchProfileError())
  }  
}