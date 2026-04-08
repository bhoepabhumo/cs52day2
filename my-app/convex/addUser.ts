import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addUser = mutation({
  args: { username: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", { username: args.username, password: args.password });
    // do something with `taskId`
  },
});