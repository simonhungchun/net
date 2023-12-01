import axios from "axios";
import axiosRetry from "axios-retry";
import { co } from "@/utils";
axiosRetry(axios, { retries: 3 });
/**
 * @description 获取歌手分类列表
 * @param {Object} data 请求参数
 * @param {Number} data.limit 返回数量 , 默认为 30
 * @param {Number} data.offset 偏移数量，用于分页 , 如 :( 页数 -1)*30
 * @param {Number} data.type 类别（-1:全部、1:男歌手、2:女歌手、3:乐队）
 * @param {Number} data.area 地域（-1:全部、7华语、96欧美、8:日本、16韩国、0:其他）
 */
export const getArtistList = (data) => {
  return co(axios.post(`/artist/list`, data));
};
/**
 * @description 搜索音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "
 * @param {Object} params 请求参数
 * @param {String} params.keywords 关键词
 * @param {Number} params.limit 返回数量，默认为 30
 * @param {Number} params.offset  偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30
 * @param {Number} params.type 类别 (1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样))
 * @returns {Promise}
 */
export const cloudsearch = (params) =>
  co(axios.get("/cloudsearch", { params }));
/**
 * @description 获取 APP 首页信息
 */
export const getHomePageData = () => co(axios.post("/homepage/block/page"));

/**
 * @description
 */

export const getHomepageDragonBall = () =>
  co(axios.get("/homepage/dragon/ball1"));
