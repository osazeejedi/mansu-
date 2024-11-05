import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const response = await fetch(`http://ip-api.com/json`);
  const data = await response.json();

  // Check for specific countries and redirect accordingly
  const currentPath = req.nextUrl.pathname;
  const countryCode = data.countryCode.toString().toLowerCase();

  // Allow access to specific paths without redirection
  const allowedPaths = [
    "/about",
    "/partnership",
    "/our-services",
    "/contact-us",
  ];
  if (allowedPaths.includes(currentPath)) {
    return NextResponse.next();
  }

  if (countryCode === "ng" && currentPath === "/") {
    const newPath = `/ng`;
    const newUrl = new URL(newPath, req.url);
    return NextResponse.redirect(newUrl, { status: 301 });
  } else if (countryCode === "gh" && currentPath === "/") {
    const newPath = `/gh`;
    const newUrl = new URL(newPath, req.url);
    return NextResponse.redirect(newUrl, { status: 301 });
  } else if (countryCode === "gb" && currentPath === "/") {
    const newPath = `/gb`;
    const newUrl = new URL(newPath, req.url);
    return NextResponse.redirect(newUrl, { status: 301 });
  } else if (currentPath === "/") {
    const newPath = `/gb`;
    const newUrl = new URL(newPath, req.url);
    return NextResponse.redirect(newUrl, { status: 301 });
  } else {
    return NextResponse.next();
  }
};

export const config = {
  matcher: ["/((?!api|static|favicon.ico|_next|_next/image|images).*)"],
};
