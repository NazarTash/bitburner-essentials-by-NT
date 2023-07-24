/**
 * Uses a hard-coded list of servers and attempts to feed the
 * hack-template script to them. Mainly Used for updating the hacking
 * script on all available servers.
 *
 * If after augmentation, run after acquiring all port-openers.
 *
 *
 * @param {NS} ns */
export async function main(ns) {

  // List of servers that we can run scripts on, growing list
  const servers = ["foodnstuff", "iron-gym", "nectar-net", "harakiri-sushi",
    "max-hardware", "hong-fang-tea", "sigma-cosmetics", "joesguns", "zer0", "CSEC", "neo-net",
    "phantasy", "omega-net", "silver-helix", "the-hub", "avmnite-02h", "n00dles", "zb-institute",
    "univ-energy", "omnia", "millenium-fitness", "global-pharm", "rho-construction",
    "I.I.I.I", "alpha-ent", "summit-uni", "aevum-police", "rothman-uni", "netlink",
    "unitalife", "solaris", "lexo-corp"];

  let i = 0;
  for (i in servers) {
    // Open ports if needed
    ns.brutessh(servers[i]);
    ns.ftpcrack(servers[i]);
    ns.httpworm(servers[i]);
    ns.relaysmtp(servers[i]);
    ns.sqlinject(servers[i]);
    ns.nuke(servers[i]);

    // Make sure no other scripts are running
    ns.killall(servers[i]);

    // Use up all available memory for hacking script
    ns.scp("hack-template.js", servers[i]);
    if (ns.getServerMaxRam(servers[i]) < 8) {
      ns.exec("hack-template.js", servers[i], 1);
    }
    else {
      ns.exec("hack-template.js", servers[i], (ns.getServerMaxRam(servers[i]) / 8) * 3);
    }
  }
}