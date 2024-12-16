import throttle from "lodash.throttle";
import { useCallback } from 'react'


export default function throttleDnD(functionToThrottle, delay) {
    useCallback(throttle(() => {functionToThrottle}, delay));
}
