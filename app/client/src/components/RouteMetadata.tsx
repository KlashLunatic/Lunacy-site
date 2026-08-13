/**
 * SEO rendering reminder: use the shared route record so client-side navigation
 * keeps the document head consistent with each pre-rendered static route.
 */
import routeMetadata from "@shared/route-metadata.json";
import { useEffect } from "react";
import { useLocation } from "wouter";

type RouteMetadata = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

const metadata = routeMetadata as Record<string, RouteMetadata>;

const routeAliases: Record<string, string> = {
  "/about": "/mythology",
  "/services": "/studio",
  "/portfolio": "/work",
  "/interactive-worlds": "/worlds",
};

function normalisePath(path: string) {
  const withoutTrailingSlash = path.length > 1 ? path.replace(/\/+$/, "") : path;
  return routeAliases[withoutTrailingSlash] ?? withoutTrailingSlash;
}

function upsertMeta(selector: string, attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

export default function RouteMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const route = normalisePath(location);
    const current = metadata[route] ?? metadata["/"];
    const absoluteUrl = `https://lunacymedia.ca${route === "/" ? "/" : route}`;

    document.title = current.title;
    upsertMeta('meta[name="description"]', "name", "description", current.description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", current.ogTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", current.ogDescription);
    upsertMeta('meta[property="og:url"]', "property", "og:url", absoluteUrl);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", current.ogTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", current.ogDescription);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = absoluteUrl;
  }, [location]);

  return null;
}
