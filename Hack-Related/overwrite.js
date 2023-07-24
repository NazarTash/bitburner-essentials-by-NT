/**
 * Uses a hard-coded list of servers and attempts to feed the
 * hack-template script to them.
 *
 * Run after acquiring all port-openers.
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
  let file = "hack-template.js";

  // List of targets
  const target1 = "iron-gym";
  const target2 = "joesguns";
  const target3 = "harakiri-sushi";

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
    ns.scp(file, servers[i]);
    var threads = 3;


    if (ns.getServerMaxRam(servers[i]) < 8) {
      threads = 1;
    }
    else {
      threads = ns.getServerMaxRam(servers[i]) / 8 * 3;
    }


    // Switch targets
    if (i < 8) {
      ns.exec(file, servers[i], threads, target2);
    }
    else if (i > 7 && i < 18) {
      ns.exec(file, servers[i], threads, target3);
    }
    else {
      ns.exec(file, servers[i], threads, target1);
    }
  }
}