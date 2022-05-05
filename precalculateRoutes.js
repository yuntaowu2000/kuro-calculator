const nodes_before_5 = [];
const nodes_5_guild = [];
const nodes_5_other = [];
const nodes_final = [];

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

setupNodes(data_before_5, nodes_before_5);
setupNodes(data_5_guild, nodes_5_guild);
setupNodes(data_5_other, nodes_5_other);
setupNodes(data_final, nodes_final);

const potential_sums = [];

// first event
for (let i = 0; i < nodes_before_5[0].length; i++) {
    potential_sums.push(
        {
            "selection": i.toString(), // 0 is the first choice 
            "result": nodes_before_5[0][i], // resulting LGC values
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

generateSumAndRoute(nodes_before_5, potential_sums, 1);

// only leave a single selection for each LGC result
const route_selection = {};
const selection_to_levels = {};

for (let i = 0; i < potential_sums.length; i++) {
    let lgc_result = JSON.stringify(potential_sums[i]["result"]);
    route_selection[lgc_result] = potential_sums[i]["selection"];

    // record the levels, for best comparison at the end.
    let law_level = getLevel(law_level_values, potential_sums[i]["result"][0]);
    let gray_level = getLevel(gray_level_values, potential_sums[i]["result"][1]);
    let chaos_level = getLevel(chaos_level_values, potential_sums[i]["result"][2]);
    selection_to_levels[potential_sums[i]["selection"]] = [law_level, gray_level, chaos_level];
}

const final_sums_guild = [];
const final_sums_other = [];

for (let key in route_selection) {
    let lgc_result = JSON.parse(key);
    let selection = route_selection[key];
    let law_level = getLevel(law_level_values, lgc_result[0]);
    if (law_level >= 3) {
        final_sums_guild.push(
            {
                "selection": selection,
                "result": lgc_result
            }
        );
    }
    // we should always be able to select at least one partner
    // only the guild has different LGC values
    final_sums_other.push(
        {
            "selection": selection,
            "result": lgc_result
        }
    );
}

generateSumAndRoute(nodes_5_guild, final_sums_guild, 0);
generateSumAndRoute(nodes_final, final_sums_guild, 0);

generateSumAndRoute(nodes_5_other, final_sums_other, 0);
generateSumAndRoute(nodes_final, final_sums_other, 0);

const final_route_selection = {};

function setupFinalSelections(final_sums, type) {
    for (let i = 0; i < final_sums.length; i++) {
        let law_level = getLevel(law_level_values, final_sums[i]["result"][0]);
        let gray_level = getLevel(gray_level_values, final_sums[i]["result"][1]);
        let chaos_level = getLevel(chaos_level_values, final_sums[i]["result"][2]);
        let final_level = JSON.stringify([law_level, gray_level, chaos_level]);
    
        // check the previous selections, we want more lv3 before selection
        let prev_selection = final_sums[i]["selection"].substring(0, data_before_5.length);
        let prev_level = selection_to_levels[prev_selection];
        let key = final_level;
        if (!(key in final_route_selection)) {
            // the final level result doesn't exist yet, add it to the final selection first
            final_route_selection[key] = final_sums[i]["selection"] + type;
        } else if (prev_level[0] >= 3 && prev_level[1] >= 3 && prev_level[2] >= 3) {
            // we want to get all 3s before selecting route if possible.
            final_route_selection[key] = final_sums[i]["selection"] + type;
        }
    }
}

setupFinalSelections(final_sums_guild, "guild");
setupFinalSelections(final_sums_other, "other");

console.log(final_route_selection);