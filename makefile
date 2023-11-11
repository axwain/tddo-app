CC = clang
CFLAGS = $(shell pkg-config --cflags gtk4)
LDLIBS = $(shell pkg-config --libs gtk4)

build:
	$(CC) $(CFLAGS) $(LDLIBS) main.c -o ./bin/tddo-app
	cp ui.xml ./bin/ui.xml

