import { NextRequest, NextResponse } from "next/server";
import { Connect } from "../Connect";
import { Course } from "./model";
Connect();
export async function GET(req) {
  try {
    const courses = await Course.find({});
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, description, price, desc_price, image } = await req.json();

    const course = await Course.findOne({ name: name });
    if (course) {
      return NextResponse.json(
        { message: "course already exist" },
        { status: 403 }
      );
    }
    const newCourse = new Course({
      name,
      description,
      price,
      desc_price,
      image,
    });
    newCourse.save();
    return NextResponse.json(
      { message: "Course Added", Course: newCourse },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const { ID, data } = await req.json();

  if (!ID) {
    return NextResponse.json(
      { message: " course ID not found" },
      { status: 404 }
    );
  }
  if (!data) {
    return NextResponse.json({ message: "Data not found" }, { status: 404 });
  }

  try {
    const course = await Course.findById(ID);
    if (!course) {
      return NextResponse.json(
        { message: "course not found" },
        { status: 404 }
      );
    }

    const newCourse = await Course.findByIdAndUpdate(ID, data, { new: true });

    return NextResponse.json(
      { message: "Course Updated", Course: newCourse },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { ID } = await req.json();

    if (!ID) {
      return NextResponse.json(
        { message: " course ID not found" },
        { status: 404 }
      );
    }

    const course = await Course.findById(ID);
    if (!course) {
      return NextResponse.json(
        { message: "course not found" },
        { status: 404 }
      );
    }

    await Course.findByIdAndDelete(ID);
    return NextResponse.json({ message: "Course Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}
