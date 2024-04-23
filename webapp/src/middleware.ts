import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const host = request.headers.get('host');
    if (!request.nextUrl.pathname || request.nextUrl.pathname === '/') {
        return NextResponse.redirect(`http://${host}/dashboard`);
    }
    return NextResponse.next();
}
