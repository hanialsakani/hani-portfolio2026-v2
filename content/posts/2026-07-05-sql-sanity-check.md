---
# Sample starter post — edit or delete freely.
title: The 5-row SQL sanity check I run before trusting any dataset
type: toolbox
tags: [SQL, data-quality]
date: 2026-07-05
---
Before I build anything on a new table, I spend five minutes running the same five checks. They've caught broken joins, silent duplicates and "surely that column is never null" surprises more times than I can count.

## The five rows

**1. How big is it, really?**

```sql
SELECT COUNT(*) AS rows_total FROM orders;
```

If the number surprises you in either direction, stop and ask why before writing another line.

**2. Is the "unique" key actually unique?**

```sql
SELECT order_id, COUNT(*) AS dupes
FROM orders
GROUP BY order_id
HAVING COUNT(*) > 1
LIMIT 5;
```

Zero rows back = safe to join on. Anything else = every downstream number is suspect.

**3. Where are the nulls hiding?**

```sql
SELECT
  COUNT(*) - COUNT(customer_id) AS null_customer,
  COUNT(*) - COUNT(amount)      AS null_amount,
  COUNT(*) - COUNT(created_at)  AS null_created
FROM orders;
```

**4. Does time behave?**

```sql
SELECT MIN(created_at), MAX(created_at) FROM orders;
```

Future dates and 1970 timestamps both mean the pipeline lies somewhere.

**5. Do the categories match the story?**

```sql
SELECT status, COUNT(*) FROM orders GROUP BY status ORDER BY 2 DESC;
```

If the business swears there are four statuses and the table has eleven, you've just found your first stakeholder conversation.

## Why it matters

None of this is clever SQL — that's the point. The value of an analyst isn't writing impressive queries; it's never presenting a number you haven't earned the right to trust.
