import React, { useEffect, useState } from 'react'

function Sayhello() {
  const [data, setData] = useState({ name: "" });
  // 外部のAPIにリクエストするのは副作用なのでuseEffect内で処理
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((profile) => { setData(profile) })
  }, [])
  return (
    <div>{data.name}</div>
  )
}

export default Sayhello;
