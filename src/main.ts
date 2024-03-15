const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface IItem {
    id: number
    postId: number
    email: string
    body: string
    name: string
}

interface IPartItem {
    ID: number
    Email: string
}

const getData = (url: string): Promise<IItem[]> => {
    return fetch(url).then((data) => data.json())
}

getData(COMMENTS_URL).then((data): void => {
    const result: IPartItem[] = data.map((item) => ({
        ID: item.id,
        Email: item.email,
    }))
    console.log(result)
})
