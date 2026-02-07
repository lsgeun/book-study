package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookmarkAjaxRestController {
    private List<Bookmark> bookmarks = new ArrayList<>();

    @RequestMapping(method = RequestMethod.POST, path = "/bookmark")
    public String resgisterBookmark(@RequestBody Bookmark bookmark) {
        bookmarks.add(bookmark);
        return "registered";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/bookmarks")
    public List<Bookmark> getBookmarks() {
        return bookmarks;
    }
}
