export interface ProgramStats {
  avgPace: number;
  steps: ProgramStep[];
  totalDistance: number;
  totalDuration: number;
}

export interface ProgramStep {
  distance?: number;
  duration: number;
  pace?: number;
  type: "rest" | "run";
}

export function parseDuration(durationStr: string): number {
  let totalSeconds = 0;
  const minutesMatch = durationStr.match(/(\d+)'(?!')/);
  if (minutesMatch) {
    totalSeconds += parseInt(minutesMatch[1], 10) * 60;
  }
  const secondsMatch = durationStr.match(/(\d+)"/);
  if (secondsMatch) {
    totalSeconds += parseInt(secondsMatch[1], 10);
  }
  return totalSeconds;
}

export function parsePace(paceStr: string): number {
  const parts = paceStr.split(":");
  if (parts.length !== 2) return 0;
  const minutes = parseInt(parts[0], 10);
  const seconds = parseInt(parts[1], 10);
  return minutes * 60 + seconds;
}

const tokenize = (input: string) => {
  const cleanInput = input.replace(/\n/g, "+").trim();
  if (!cleanInput) return [];

  const parts = cleanInput
    .split("+")
    .map((p) => p.trim())
    .filter((p) => p);

  let allSteps: ProgramStep[] = [];

  for (const part of parts) {
    const steps = parseSequence(part);
    allSteps = [...allSteps, ...steps];
  }

  return allSteps;
};

const RE_MULTIPLIER = /^(\d+)x\s+(.*)$/i;
const RE_RUN = /^(\d+'?\s*\d*"?)\s*(?:@\s*(\d+:\d+))?$/i;

export function parseProgram(input: string): ProgramStats {
  const steps = tokenize(input);

  let totalDistance = 0;
  let totalDuration = 0;

  steps.forEach((s) => {
    totalDistance += s.distance || 0;
    totalDuration += s.duration;
  });

  const avgPace =
    totalDistance > 0 ? totalDuration / (totalDistance / 1000) : 0;

  return {
    avgPace,
    steps,
    totalDistance,
    totalDuration,
  };
}

function parseSequence(sequence: string): ProgramStep[] {
  const sequenceClean = sequence.trim();
  const multiMatch = sequenceClean.match(RE_MULTIPLIER);

  if (multiMatch) {
    const count = parseInt(multiMatch[1], 10);
    let workStr = multiMatch[2];

    let betweenRest: null | ProgramStep = null;
    let endRest: null | ProgramStep = null;

    const rOuterMatch = workStr.match(
      /\s+R\s?(\d+'?\s*\d*"?)(\s*@\s*(\d+:\d+))?$/,
    );
    if (rOuterMatch) {
      const duration = parseDuration(rOuterMatch[1]);
      const pace = rOuterMatch[3] ? parsePace(rOuterMatch[3]) : 0;
      const restStep = {
        distance: pace > 0 ? (duration / pace) * 1000 : 0,
        duration,
        pace,
        type: "rest" as const,
      };

      endRest = restStep;
      betweenRest = restStep;

      workStr = workStr.substring(0, rOuterMatch.index).trim();
    }

    const isNested = RE_MULTIPLIER.test(workStr);

    if (!isNested) {
      const rInnerMatch = workStr.match(
        /\s+r\s?(\d+'?\s*\d*"?)(\s*@\s*(\d+:\d+))?$/,
      );
      if (rInnerMatch) {
        const duration = parseDuration(rInnerMatch[1]);
        const pace = rInnerMatch[3] ? parsePace(rInnerMatch[3]) : 0;
        const restStep = {
          distance: pace > 0 ? (duration / pace) * 1000 : 0,
          duration,
          pace,
          type: "rest" as const,
        };

        betweenRest = restStep;

        if (!endRest) {
          endRest = restStep;
        }

        workStr = workStr.substring(0, rInnerMatch.index).trim();
      }
    }

    const workSteps = parseSequence(workStr);

    let sequenceSteps: ProgramStep[] = [];

    for (let i = 0; i < count; i++) {
      sequenceSteps = [...sequenceSteps, ...workSteps];

      const isLast = i === count - 1;
      if (!isLast) {
        if (betweenRest) sequenceSteps.push(betweenRest);
      } else {
        if (endRest) sequenceSteps.push(endRest);
      }
    }

    return sequenceSteps;
  } else {
    const runMatch = sequenceClean.match(RE_RUN);
    if (runMatch) {
      const duration = parseDuration(runMatch[1]);
      const pace = runMatch[2] ? parsePace(runMatch[2]) : 0;

      return [
        {
          distance: pace > 0 ? (duration / pace) * 1000 : 0,
          duration,
          pace,
          type: "run",
        },
      ];
    }

    return [];
  }
}
