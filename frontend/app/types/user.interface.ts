export interface IUser {
    _id: string
    email: string
    name: string
    avatarPath: string
    description: string
    location: string
    subscribersCount: number
    createdAt: string
    updatedAt: string
    videosCount?: number


}