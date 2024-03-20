import { NextRequest, NextResponse } from "next/server";

const protectedRoutePattern = /^\/Dashboard\/\d+$/; // Padrão para rotas protegidas
const landingRoute = "/"; // Rota de login

const validateMiddlewareCookies = (req: NextRequest) => {
  const sessionId = req.cookies.get("connect.sid")?.value?.substring(2);
  return sessionId
    ? {
        cookies: `connect.sid=${sessionId}`,
      }
    : false;
};

export default async function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("connect.sid");
  const currentRoute = req.nextUrl.pathname;

  // Verifica se a rota atual corresponde ao padrão de rota protegida
  if (protectedRoutePattern.test(currentRoute)) {
    // Se o usuário não estiver autenticado, redireciona-o para a página de login
    if (!isAuthenticated) {
      const absoluteURL = new URL(landingRoute, req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  // Se o usuário estiver autenticado ou a rota não estiver protegida, permita o acesso à rota
  return NextResponse.next();
}
