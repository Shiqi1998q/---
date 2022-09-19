import { useEffect, useState } from "react"

const useData = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const newData = [
            { value: Math.random(), name: '东岗路' },
            { value: Math.random(), name: '段家滩' },
            { value: Math.random(), name: '雁北' },
            { value: Math.random(), name: '五泉山' },
            { value: Math.random(), name: '中山路' },
            { value: Math.random(), name: '庆阳路' },
            { value: Math.random(), name: '武都路' },
            { value: Math.random(), name: '酒泉路' },
            { value: Math.random(), name: '天水路' },
        ];
        setData(newData)
    }, [])
    return { data: data }
}
export { useData }