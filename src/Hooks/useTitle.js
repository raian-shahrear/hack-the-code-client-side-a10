import { useEffect } from "react"

const useTitle = title => {
  useEffect( ()=> {
    document.title = `${title} - Hack The Code`;
  }, [title])
}

export default useTitle;