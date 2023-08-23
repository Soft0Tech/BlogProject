

export class User{
    id!: number;
    name!: string;
    username!: string;
    email!:string;
    password!: string;
    profilepic!: string;
};
export class Post{
    id!: number;
    posttitle!:string;
    postContent!:string;
    category!:[];
    postThumblain!:string;
    postby!:User['id'];
}