const { forwardTo } = require("prisma-binding");
const Query = {
  //could forward to db if no auth is needed
  items: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
