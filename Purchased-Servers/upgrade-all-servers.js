/**
 * Upgrades all purchased server RAMs by doubling it
 * Hard limiter is set for now
 * @param {NS} ns */
export async function main(ns) {
  let i = 0;
  var prefix = "pserv-";

  // Set a limit on how much each server should have, used to balance out
  var limit = 4096
  while (i < ns.getPurchasedServerLimit()) {
    // Server Name
    let name = prefix + i;

    let maxRam = ns.getServerMaxRam(name);
    if (maxRam < limit) {
      ns.upgradePurchasedServer(name, ns.getServerMaxRam(name) * 2);
    }
    ++i;
  }
}

