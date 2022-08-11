CREATE TABLE "tasks" (
	"id" serial primary key,
	"item" varchar(40)
);

INSERT INTO "tasks" ("item")
VALUES ('Do the laundry'), ('Do Dishes'), ('Cut the grass');