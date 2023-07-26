/**
 * From Chrisrabe's implementation of multi-functional hacking
 * for most efficient results, takes in arguments to either
 * weaken, grow or hack a server
 *
 * @param {NS} ns **/
export async function main(ns) {
  var action = ns.args[0];
  var target = ns.args[1];
  var delay = ns.args[2];
  var pid = ns.args[3];

  ns.print(pid);
  await ns.sleep(delay);

  if (action === "weaken") {
    await ns.weaken(target);
  } else if (action === "grow") {
    await ns.grow(target);
  } else {
    await ns.hack(target);
  }
}