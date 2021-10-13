import { Theme } from "./Theme"
import { User } from "./User"

export class Post{
    public id: Number
    public title: string
    public text: string
    public date: Date
    public names: User
    public themes: Theme
}