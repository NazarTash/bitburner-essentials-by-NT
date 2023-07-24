/**
 * Upgrades all purchased server RAMs by doubling it
 * @param {NS} ns */
export async function main(ns) {
  let i = 0;
  var prefix = "pserv-";
  while (i < ns.getPurchasedServerLimit()) {
    // Server Name
    let name = prefix + i;
    ns.upgradePurchasedServer(name, ns.getServerMaxRam(name) * 2);
    ++i;
  }
}

