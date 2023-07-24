/**
 * Apply the hacking script to each purchased server. Run after
 * purchasing servers.
 *
 * @param {NS} ns */
export async function main(ns) {
  let i = 0;

  const prefix = "pserv-";
  const filename = "hack-serv1.js";

  const target1 = "max-hardware";
  const target2 = "CSEC";

  while (i < ns.getPurchasedServerLimit()) {

    let name = prefix + i;
    ns.killall(name);

    ns.scp(filename, name);
    if (i > 12) {
      ns.exec(filename, name, ns.getServerMaxRam(name) / 8 * 3, target1);
    }
    else {
      ns.exec(filename, name, ns.getServerMaxRam(name) / 8 * 3, target2);
    }
    // Make sure to use up all memory

    ++i;
  }
}