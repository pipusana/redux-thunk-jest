// actions.spec.js
import { fetchProfile } from '../action/fetchgithub';

describe('Fetch git hub profile', () => {
  it('test action fetch git hub profile success', async () => {
    const urlGithub = 'https://api.github.com/users/pipusana';
    const getState = () => ({
      name: '',
      image: '',
      error: false,
    })
  
    const dispatch = jest.fn()
    await fetchProfile(urlGithub)(dispatch, getState)
    expect(dispatch).toHaveBeenCalledWith({
      type: 'FETCH_PROFILE_SUCCESS',
      data: {
        image: 'https://avatars1.githubusercontent.com/u/17668304?v=4',
        name: 'pipusana',
      },
    })
  });
  
  it('test action fetch git hub profile error', async () => {
    const urlGithub = 'https://api.github.com/se';
    const getState = () => ({
      name: '',
      image: '',
      error: false,
    })
  
    const dispatch = jest.fn()
    await fetchProfile(urlGithub)(dispatch, getState)
    expect(dispatch).toHaveBeenCalledWith({
      type: 'FETCH_PROFILE_ERROR',
      data: {
        error: true
      },
    })
  });
});