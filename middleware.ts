import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const allowedPaths = ["/about", "/partnership", "/our-services", "/contact-us"];
  const currentPath = req.nextUrl.pathname;

  // need to allow certain paths without redirection
  if (allowedPaths.includes(currentPath)) {
    return NextResponse.next();
  }

  try {
    // Fetch the user's location based on IP
    const response = await fetch(`http://ip-api.com/json/${req.ip}`);
    const data = await response.json();

    const countryCode = data.countryCode.toLowerCase();
    
    // Conditional redirection based on country code
    if (countryCode === "ng" && currentPath === "/") {
      return NextResponse.redirect(new URL("/ng", req.url), { status: 301 });
    } else if (countryCode === "gh" && currentPath === "/") {
      return NextResponse.redirect(new URL("/gh", req.url), { status: 301 });
    } else if (countryCode === "gb" && currentPath === "/") {
      return NextResponse.redirect(new URL("/gb", req.url), { status: 301 });
    } else if (currentPath === "/") {
      return NextResponse.redirect(new URL("/gb", req.url), { status: 301 });
    }
  } catch (error) {
    console.error("Failed to fetch location data:", error);
    // Optionally, handle the failure by redirecting to a default page
    if (currentPath === "/") {
      return NextResponse.redirect(new URL("/gb", req.url), { status: 301 });
    }
  }

  // Proceed to the requested page if no redirection is necessary
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|static|favicon.ico|_next|_next/image|images).*)"],
};
