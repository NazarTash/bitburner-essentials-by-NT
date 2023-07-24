/**
 * Imported from the "Getting Started" section of bitburner tutorial
 *
 * @param {NS} ns */
export async function main(ns) {
  // How much RAM each purchased server will have. In this case, it'll
  // be 8GB.
  const ram = 8;

  // Iterator we'll use for our loop
  let i = 0;

  // Continuously try to purchase servers until we've reached the maximum
  // amount of servers
  while (i < ns.getPurchasedServerLimit()) {
    // Check if we have enough money to purchase a server
    if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
      // If we have enough money then purchase the server
      let hostname = ns.purchaseServer("pserv-" + i, ram);
      ++i;
    }
    //Make the script wait for a second before looping again.
    //Removing this line will cause an infinite loop and crash the game.
    await ns.sleep(1000);
  }

  // Run script "apply-to-server.js" to apply the hack
  ns.exec("apply-to-server.js");
}