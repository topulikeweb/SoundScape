import ApiResponse from '@/service/ApiResponse';
import { BaseURL } from '@/service/config';
import { IGetPlaylistDetails } from '@/service/type';

const apiResponse = new ApiResponse(BaseURL, 10000);

/**
 * @author topu
 * @date 2023/6/6
 * @Description 获取推荐歌单（未登录）
 * @return 返回值
 */
export const getHomePageData = async (limit: number) => {
  return await apiResponse.get('/personalized', { params: { limit } });
};

/**
 * @author topu
 * @date 2023/6/7
 * @Description 获取歌单详情
 * @return 返回值
 * @param options
 */

export const getPlaylistDetails = async (options: IGetPlaylistDetails) => {
  return await apiResponse.get('/playlist/detail', { params: options });
};
/**
 * @author topu
 * @date 2023/6/8
 * @Description 获取歌单所有歌曲
 * @return 返回值
 * @param options
 */
export const getPlaylistAllSongs = async (options: IGetPlaylistDetails) => {
  return await apiResponse.get('/playlist/track/all', { params: options });
};

/**
 * @author topu
 * @date 2023/6/8
 * @Description 获取音乐播放地址 standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损, hires=>Hi-Res, jyeffect => 鲸云臻音, jymaster => 鲸云母带
 * @return 返回值
 * @param id
 * @param level
 */
export const getMusicUrl = async (id: number, level = 'higher') => {
  return await apiResponse.get('/song/url/v1', { params: { id, level } });
};

/**
 * @author topu
 * @date 2023/6/9
 * @Description 获取歌单分类
 * @return 返回值
 */

export const getPlayListCategory = async () => {
  return await apiResponse.get('/playlist/highquality/tags');
};

/**
 * @author topu
 * @date 2023/6/9
 * @Description 获取热门搜索歌曲
 * @return 返回值
 */

export const getHotSearchSongs = async () => {
  return await apiResponse.get('/search/hot/detail');
};

/**
 * @author topu
 * @date 2023/6/10
 * @Description 获取搜索建议
 * @return 返回值
 */

export const getSearchSuggestion = (keywords: string) => {
  return apiResponse.get('/search/suggest', { params: { keywords } });
};

/**
 * @author topu
 * @date 2023/6/27
 * @Description 搜索歌曲
 * @return 返回值
 * @param keywords
 * @param limit
 * @param offset
 */
export const toSearchSongsResult = (keywords: string, limit: number, offset: number) => {
  return apiResponse.get('/search', {
    params: { keywords, limit, offset },
  });
};

/**
 * @author topu
 * @date 2023/6/29
 * @Description 根据搜索的歌曲进行模糊匹配
 * @return 返回值
 * @param keywords
 */
export const searchSongsMultipleMatching = (keywords: string) => {
  return apiResponse.get('/search/multimatch', { params: { keywords } });
};

/**
 * @author topu
 * @date 2023/6/29
 * @Description 获取视频播放地址
 * @return 返回值
 * @param id
 */
export const getVideoResource = (id: number) => {
  return apiResponse.get('/mv/url', { params: { id } });
};

/**
 * @author topu
 * @date 2023/6/30
 * @Description 获取MV的评论
 * @return 返回值
 * @param id
 * @param limit
 * @param offset
 */
export const getMVComment = (id: number, limit: number, offset: number) => {
  return apiResponse.get('/comment/mv', { params: { id, limit, offset } });
};
