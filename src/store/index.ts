import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/moudle/counter';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
/**
 * @author topu
 * @date 2023/6/4
 * @Description Hooks的二次封装
 * @param {type} [param] 参数说明
 * @return 返回值
 */
// 定义useSelector的参数state的类型
type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

// 定义useAppDispatch的类型
type DispatchType = typeof store.dispatch;
export const useAppDispatch: () => DispatchType = useDispatch;
export default store;
