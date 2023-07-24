/**
 * Apply the hacking script to each purchased server. Run after
 * purchasing servers.
 *
 * @param {NS} ns */
export async function main(ns) {
  let i = 0;

  var prefix = "pserv-";

  while (i < ns.getPurchasedServerLimit()) {
    let name = prefix + i;
    ns.killall(name);
    ns.scp("hack-template.js", name);

    // Make sure to use up all memory
    ns.exec("hack-template.js", name, ns.getServerMaxRam(name) / 8 + 3);
    ++i;
  }
}