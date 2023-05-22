
const timeRag= /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lrcString){
    const lyricInfos = []
    const lyricLines = lrcString.split("\n")
    for(const line of lyricLines){
        const results = timeRag.exec(line) //得到匹配字符串
        if(!results) continue
        const minute = results[1] * 60 * 1000
        const second = results[2] * 1000
        const msecond = results[3].length === 2 ? results[3] *10 : results[3] *1
        const time = minute + second + msecond
        const text = line.replace(timeRag,"")
        lyricInfos.push({time,text})
    }
    return lyricInfos
} 