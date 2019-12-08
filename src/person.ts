import { Helper } from "./helper";

export enum POSITIONS {
    JUNIOR = 'junior',
    MIDDLE = 'middle',
    SENIOR = 'senior',
}

export const USER_DATA = {
    firstName: 'Ivan',
    secondName: 'Mityuaev',
    bio: 'I am from Zaporozhye',
    dateBirth: '19920405'
};

// Types

// Author

type PersonType = {
    firstName: string;
    secondName: string;
    bio: string;
    dateBirth: Date;
}

type PersonMethods = {
    getAge: ()=>number;
    fullname: ()=>string;
}

type UserType = {
    memberSince: Date;
    nickname: string;
}

type UserMethods = {
}

export type UserInputDataType = PersonType & UserType;

export type UserDataType = PersonType & PersonMethods & UserType & UserMethods;

let user: UserInputDataType = {
    firstName: 'nick', secondName: 'Grey',
    bio: 'great guy from New York', dateBirth: new Date('19960707'), memberSince: new Date('20190702'), nickname: 'hot weel'
}
// Post

type PostType = {
    creationDate: Date;
    updateData: Date;
    author: User;
    title: string;
    text: string;
}

type PostMethods = {
    upvotePost: () => string;
    addComment: () => Comment;
}

type CommentType = {
    id: string;
    text: string;
}

type CommentMethods = {
    upvoteComment: () => string;
    addComment: () => Comment;
}

export type PostInputDataType = PostType & CommentType[];

export type PostDataType = PostType & PostMethods & CommentType[] & CommentMethods;

export interface PostInputInterface extends PostDataType { };

// Classes

export abstract class GeneralFunctionalityClass<T, K> {
    value: Partial<Readonly<T>> = this._data;

    constructor(private _data: K) {
        // some manipulations with data
    }
}

export class User extends GeneralFunctionalityClass<UserDataType, UserInputDataType>{

    constructor(private data: UserInputDataType) {
        super(data);
        // some manipulations with data
    }

    getUserFullName(): string {
        return `${this.data.firstName} ${this.data.secondName}`;
    }

    getAge(): number {
        console.log('Helper.nowDate', Helper.nowDate);
        console.log('this.data.dateBirth.getTime()', this.data.dateBirth.getTime());
        var ageDifMs = Helper.nowDate - this.data.dateBirth.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        console.log('ageDate', ageDate);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

export class Post extends GeneralFunctionalityClass<PostDataType, PostInputDataType>{

    private timeAgo: string;

    constructor(private data: PostInputDataType) {
        super(data);
        // some manipulations with data
        this.timeAgo = Helper.getTimeAgo(data.creationDate);
    }

    getTimeAgo() {
        return this.timeAgo
    }

    updateText(newText: string) {
        this.data.text = newText;
    }
}
