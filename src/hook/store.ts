import { AppDispatch } from '@/store'
import { AppState } from '@/store/features/app/appSlice'
import { useDispatch, useSelector } from 'react-redux'

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
