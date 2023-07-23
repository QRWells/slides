<script setup lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from "vue";
import Plotly from "plotly.js-dist-min";

const graph = ref<HTMLDivElement>();

const data = [
    {
        type: 'surface',
        x: [3, 4, 5, 6, 7],
        y: [2, 3, 4, 5, 6],
        z: [
            [358.907, 829.057, 1653.6, 2894.77, 4531.15],
            [1027.95, 4139.2, 12970.8, 37227.6, 97127.2],
            [2773.72, 23578.8, 156207, 727258, 2.78E+06],
            [8339.04, 177449, 2.18E+06, 1.74E+07, 1.04E+08],
            [25523.9, 1.40E+06, 3.42E+07, 7.91E+08, 6.82E+09]
        ],
        showscale: false,
    }];

const layout = {
    scene: {
        xaxis: { title: 'Depth', tickvals: [3, 4, 5, 6, 7], },
        yaxis: { title: 'Branch', tickvals: [2, 3, 4, 5, 6], },
        zaxis: {
            title: 'Time [ns]', type: 'log',
            autorange: true,
            showexponent: 'all',
        },
        camera: {
            center: {
                x: 0, y: 0, z: 0
            },
            eye: {
                x: -2, y: -1, z: 1
            },
            up: {
                x: 0, y: 0, z: 1
            }
        }
    },
    autosize: true,
    height: 360,
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
    },
    showlegend: true,
};


onMounted(() => {
    if (!graph.value) return;
    Plotly.newPlot(graph.value, data, layout, { displayModeBar: false });
});

</script>

<template><div ref="graph"></div></template>