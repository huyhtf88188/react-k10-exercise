{
  const username: string = "hoang";
  let age: number = 20;
  let isTeacher: boolean = true;
}
// Array
{
  const myStudent: string[] = ["Hoang", "Huy", "Thai"];
  const arr1: [number, number, string] = [1, 2, "F8"]; //tuple
  const arr2: (string | number)[] = [1, 2, "Hoang", "F8"];

  console.log(arr1, arr2);
  console.log(arr1, arr2);
  console.log(arr1, arr2);

  let isMarried: boolean = true;

  // enum: "male", "female", "other"

  enum Gender {
    Male,
    Female,
    Other,
  }

  let gender: Gender = Gender.Male;

  enum GioiTinh {
    "Nam",
    "Nu",
    "Khac",
  }

  let gioiTinh: GioiTinh = GioiTinh.Nam;
}
