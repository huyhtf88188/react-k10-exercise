// Union type : kết hợp
let age: number | string = 32;
age = "ba muoi hai";

const myArr: (number | string)[] = [1, 2, 3, "Hoang"];

type Account = {
	email: string;
	password: string;
};

type Information = {
	avatar: string;
	address: string[];
	age: number;
};

// &: Intersection Type

type UserInfor = Account & Information;

let userA: UserInfor = {
	email: "f8@gmail.com",
	password: "123456",
	avatar: "https://avatar.png",
	address: ["Hoai Duc - HN"],
	age: 33,
};
