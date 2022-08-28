import { onFCP, onLCP, onCLS, onTTFB, onFID, onINP } from "web-vitals";

function getSelector(node, maxLen = 100) {
  let sel = "";
  try {
    while (node && node.nodeType !== 9) {
      const part = node.id
        ? "#" + node.id
        : node.nodeName.toLowerCase() +
          (node.className && node.className.length
            ? "." + Array.from(node.classList.values()).join(".")
            : "");
      if (sel.length + part.length > maxLen - 1) return sel || part;
      sel = sel ? part + ">" + sel : part;
      if (node.id) break;
      node = node.parentNode;
    }
  } catch (err) {
    // Do nothing...
  }
  return sel;
}

function getLargestLayoutShiftEntry(entries) {
  return entries.reduce((a, b) => (a && a.value > b.value ? a : b));
}

function getLargestLayoutShiftSource(sources) {
  return sources.reduce((a, b) => {
    return a.node &&
      a.previousRect.width * a.previousRect.height >
        b.previousRect.width * b.previousRect.height
      ? a
      : b;
  });
}

export default function sendWebVitals() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      dataLayer.push(arguments);
    };
  window.gtag("js", new Date());
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: window.location.pathname,
  });

  function sendWebVitalsGAEvents({ name, delta, id, entries, rating }) {
    let webVitalInfo = "(not set)";

    if (entries.length) {
      if (name === "LCP") {
        const lastEntry = entries[entries.length - 1];
        webVitalInfo = getSelector(lastEntry.element);
      } else if (name === "FID") {
        const firstEntry = entries[0];
        webVitalInfo = getSelector(firstEntry.target);
      } else if (name === "CLS") {
        const largestEntry = getLargestLayoutShiftEntry(entries);
        if (
          largestEntry &&
          largestEntry.sources &&
          largestEntry.sources.length
        ) {
          const largestSource = getLargestLayoutShiftSource(
            largestEntry.sources
          );
          if (largestSource) {
            webVitalInfo = getSelector(largestSource.node);
          }
        }
      }
    }

    let dataSaver;
    let effectiveType;
    let deviceMemory;
    if ("connection" in navigator) {
      dataSaver = navigator.connection.saveData;
      effectiveType = navigator.connection.effectiveType;
      deviceMemory = navigator.deviceMemory;
    }

    window.gtag("event", name, {
      event_category: "Web Vitals",
      event_action: name,
      event_label: id,
      value: Math.round(name === "CLS" ? delta * 1000 : delta),
      non_interaction: true,
      transport: "beacon",
      dimension5: webVitalInfo,
      dimension6: effectiveType,
      dimension7: dataSaver,
      dimension8: deviceMemory,
      dimension9: rating,
    });
  }

  onFCP(sendWebVitalsGAEvents);
  onLCP(sendWebVitalsGAEvents);
  onCLS(sendWebVitalsGAEvents);
  onTTFB(sendWebVitalsGAEvents);
  onFID(sendWebVitalsGAEvents);
  onINP(sendWebVitalsGAEvents);
}
