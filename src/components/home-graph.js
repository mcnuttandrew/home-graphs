import React from 'react';
import PropTypes from 'prop-types';
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceX
} from 'd3-force';

import {
  XYPlot,
  MarkSeries,
  LineSeries,
  CustomSVGSeries
} from 'react-vis';

/**
 * Create the list of nodes to render.
 * @returns {Array} Array of nodes.
 * @private
 */
function generateSimulation(props) {
  const {data} = props;
  if (!data) {
    return {nodes: [], links: []};
  }
  // copy the data
  const nodes = data.nodes.map(d => ({...d}));
  const links = data.links.map(d => ({...d}));
  // build the simuatation
  const simulation = forceSimulation(nodes)
    .force('charge', forceManyBody())
    .force('link', forceLink().id(d => d.id).distance(25).strength(2))
    .force('x', forceX())
    .stop();

  simulation.force('link').links(links);

  for (let i = 0; i < 1000; ++i) {
    simulation.tick();
  }

  return {nodes, links};
}

function forceDirectLabels(labels) {
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
      .force('charge', forceManyBody().distanceMax(30).strength(d => d.anchor ? 0 : -30))
      .force('link', forceLink(links))
      .stop();

  for (let i = 0; i < 1000; i++) {
    simulation.tick();
  }
  return nodes;
}

function buildLabelMap(nodes) {
  return nodes.reduce((acc, node) => {
    acc[node.id] = node;
    return acc;
  }, {});
}

class HomeGraph extends React.Component {
  constructor(props) {
    super(props);
    const data = generateSimulation(props);
    const labelPositions = forceDirectLabels(data.nodes);
    this.state = {
      data,
      labelPositions
    };
  }

  render() {
    const {height, width, title} = this.props;
    const {data, labelPositions} = this.state;
    const {nodes, links} = data;
    const labelMap = buildLabelMap(labelPositions);
    const nodeMap = buildLabelMap(nodes);
    // const {minX, maxX} = getXYdims(labelPositions);
    return (
      <XYPlot width={width} height={height} margin={100} className={title.split(' ').join('-')}>
        {links.map(({source, target}, index) => (<LineSeries
          key={`link-${index}`}
          style={{stroke: 'black', strokeWidth: 4}}
          data={[{...source, color: '#000'}, {...target, color: '#000'}]}
          />))}
        <MarkSeries
          data={nodes}
          colorType={'category'}
          color={'#000'}
          size={10}
          />
        {nodes.map((node, index) => (<LineSeries
          style={{
            strokeDasharray: '3 5',
            stroke: 'black'
          }}
          key={`link-label-${index}`}
          colorType="literal"
          data={[node, labelMap[node.id]]}
          />))}
        <CustomSVGSeries
          data={labelPositions}
          customComponent={(row, positionInPixels) => {
            const style = {
              fontSize: '24px',
              fontFamily: 'Norwester-Regular'
            };
            const words = row.id.split(' ');
            const rows = words.map((line, i) => {
              const oddOffset = words.length % 2 ? 12 : 0;
              return <tspan x="0" y={`${i * 24 + oddOffset}px`} style={style}>{line}</tspan>;
            });

            return (
              <g className="inner-inner-component">
                <text
                  style={{textAnchor: row.x < nodeMap[row.id].x ? 'end' : 'start'}}
                  x={0}
                  y={0}>{rows}</text>
              </g>
            );
          }}
          />
      </XYPlot>
    );
  }

}

HomeGraph.displayName = 'HomeGraph';
HomeGraph.defaultProps = {
  data: {nodes: [], links: []},
  maxSteps: 500
};
HomeGraph.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  steps: PropTypes.number
};

export default HomeGraph;
