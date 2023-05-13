export const load =async()=>{
    const resp = await fetch('https://api.adviceslip.com/advice')
    const data = resp.json()
    return {
        data
    }
}