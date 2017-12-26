import {forceSimulation, forceManyBody, forceLink, forceX} from 'd3-force';

export function forceDirectLabels(labels) {
  const anchorNodes = labels.map((label, index) => {
    return {
      x: label.x,
      y: label.y,
      fx: label.x,
      fy: label.y,
      index: labels.length + index,
      anchor: true
    };
  });
  const nodes = labels.map((label, index) => {
    return {...label, index};
  });
  const links = labels.map((label, index) => {
    return {
      source: index,
      target: labels.length + index
    };
  });
  const simulation = forceSimulation(nodes.concat(anchorNodes))
      .force('charge', forceManyBody().strength(d => 1))
      // .force('link', forceLink(links))
      .force('x', forceX())
      .stop();

  for (let i = 0; i < 1000; i++) {
    simulation.tick();
  }
  return nodes;
}
