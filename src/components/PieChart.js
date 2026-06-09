import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const PieChart = ({ data, title }) => {
  const svgRef = useRef();
  

  useEffect(() => {
    if (data && svgRef.current) {
      let width = 360;
      let height = 360;

      const radius = Math.min(width, height) / 2;

      d3.select(svgRef.current).selectAll("*").remove();

      const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const color = d3.scaleOrdinal()
        .domain(data.map(d => d.label))
        .range(['#8e44ad', '#e84393', '#f1c40f', '#1abc9c', '#2ecc71']);

      const pie = d3.pie().value(d => d.value);
      const arc = d3.arc().innerRadius(radius * 0.5).outerRadius(radius * 0.8);

      // Create donut chart slices
      const paths = svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.label))
        .attr('stroke', 'white')
        .style('stroke-width', '2px');

      // Add hover effects and tooltip
      paths.on('mouseover', function(event, d) {
        const [x, y] = arc.centroid(d);
        
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', d3.arc().innerRadius(radius * 0.45).outerRadius(radius * 0.85));

        // Add tooltip background
        svg.append('rect')
          .attr('class', 'tooltip-bg')
          .attr('x', x - 60)
          .attr('y', y - 15)
          .attr('width', 60)
          .attr('height', 30)
          .attr('fill', 'white')
          .attr('stroke', 'black')
          .attr('stroke-width', 1)
          .attr('rx', 5)
          .attr('ry', 10);

        // Add tooltip text
        svg.append('text')
          .attr('class', 'value-tooltip')
          .attr('text-anchor', 'middle')
          .attr('x', x - 30)
          .attr('y', y + 5)
          .text(`$${d.data.value}`)
          .style('font-size', '14px')
          .style('font-weight', 'bold')
          .style('fill', 'black');
      })
      .on('mouseout', function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', arc);

        svg.select('.tooltip-bg').remove();
        svg.select('.value-tooltip').remove();
      });

      // Add center white background for legend
      svg.append('circle')
        .attr('r', radius * 0.45)
        .attr('fill', 'white');

      // Add title
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '-3em')
        .text(title)
        .style('font-size', '16px')
        .style('font-weight', 'bold');

      // Add legend
      const legend = svg.selectAll('.legend')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => `translate(-45, ${i * 20 - 40})`);

      legend.append('circle')
        .attr('r', 6)
        .attr('fill', d => color(d.label));

      legend.append('text')
        .attr('x', 15)
        .attr('y', 5)
        .text(d => d.label)
        .style('font-size', '12px')
        .style('alignment-baseline', 'middle');
    }
  }, [data, title]);

  return <svg ref={svgRef}></svg>;
};