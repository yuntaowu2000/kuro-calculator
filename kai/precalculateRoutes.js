const nodes = [];

function setupNodes(data_arr, node_arr) {
    for (let i = 0; i < data_arr.length; i++) {
        let curr_item = [];
        node_arr.push(curr_item);
        if (data_arr[i]["choice"]) {
            for (let c of data_arr[i]["choice"]) {
                curr_item.push([data_arr[i]["base_L"] + c["L"], data_arr[i]["base_G"] + c["G"], data_arr[i]["base_C"] + c["C"]]);
            }
        } else {
            curr_item.push([data_arr[i]["base_L"], data_arr[i]["base_G"], data_arr[i]["base_C"]]);
        }
    }
}

setupNodes(data, nodes);

const potential_sums = [];

// first event
for (let i = 0; i < nodes[0].length; i++) {
    potential_sums.push(
        {
            "selection": i.toString(), // 0 is the first choice 
            "result": nodes[0][i], // resulting LGC values
        }
    );
} 

function generateSumAndRoute(node_arr, sum_arr, start_from) {
    for (let i = start_from; i < node_arr.length; i++) {
        let tmp = [];
        while (sum_arr.length > 0) {
            // copy the sums into a temp array
            // clear up potential sums for new sums
            tmp.push(sum_arr.shift());
        }
        for (let j = 0; j < tmp.length; j++) {
            let r = tmp[j]["result"];
            for (let k = 0; k < node_arr[i].length; k++) {
                let curr_node = node_arr[i][k];
                sum_arr.push(
                    {
                        "selection" : tmp[j]["selection"] + k.toString(), // record all choices to this event
                        "result": [r[0] + curr_node[0], r[1] + curr_node[1], r[2] + curr_node[2]] // resulting LGC values
                    }
                );
            }
        }
    }
}

generateSumAndRoute(nodes, potential_sums, 1);

// only leave a single selection for each LGC result
const final_selection = {};

for (let i = 0; i < potential_sums.length; i++) {
    // record the levels, for best comparison at the end.
    let law_level = getLevel(law_level_values, potential_sums[i]["result"][0]);
    let gray_level = getLevel(gray_level_values, potential_sums[i]["result"][1]);
    let chaos_level = getLevel(chaos_level_values, potential_sums[i]["result"][2]);
    let final_level = JSON.stringify([law_level, gray_level, chaos_level]);

    final_selection[final_level] = potential_sums[i]["selection"];
}

console.log(final_selection);