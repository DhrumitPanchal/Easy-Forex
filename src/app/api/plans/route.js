import { NextRequest, NextResponse } from "next/server";
import { Plan } from "./model";
import { Connect } from "../Connect";

Connect();

export async function GET(req) {
  try {
    const plans = await Plan.find();
    return NextResponse.json(plans, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { months, price, benefits } = await req.json();
  console.table({ months, price, benefits });
  try {
    if (!months) {
      return NextResponse.json(
        { message: "months is required" },
        { status: 404 }
      );
    }
    if (!price) {
      return NextResponse.json(
        { message: "price is required" },
        { status: 404 }
      );
    }

    const plan = await Plan.findOne({ months: months });
    if (plan) {
      return NextResponse.json(
        { message: "course already exist" },
        { status: 403 }
      );
    }

    const NewPlan = new Plan({
      months,
      price,
      benefits,
    });

    await NewPlan.save();

    return NextResponse.json(
      { message: "Plan Added", Plan: NewPlan },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const { ID, planData } = await req.json();

  if (!ID) {
    return NextResponse.json({ message: "Plan ID not found" }, { status: 404 });
  }
  if (!planData) {
    return NextResponse.json({ message: "Data not found" }, { status: 404 });
  }

  try {
    const course = await Plan.findById(ID);
    if (!course) {
      return NextResponse.json({ message: "Plan not found" }, { status: 404 });
    }

    const newPlan = await Plan.findByIdAndUpdate(ID, planData, { new: true });

    return NextResponse.json(
      { message: "Course Updated", plan: newPlan },
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
        { message: "Plan ID not found" },
        { status: 404 }
      );
    }

    const course = await Plan.findById(ID);
    if (!course) {
      return NextResponse.json({ message: "Plan not found" }, { status: 404 });
    }

    await Plan.findByIdAndDelete(ID);
    return NextResponse.json({ message: "Plan Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}
