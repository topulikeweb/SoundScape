import ApiResponse from '@/service/ApiResponse';
import { BaseURL } from '@/service/config';

const apiResponse = new ApiResponse(BaseURL, 10000);

export const fetchUsers = async () => {
  return await apiResponse.get('/top/artists');
};
