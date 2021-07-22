<template>
  <ul class="paging-wrapper">
    <li v-if="showFirstButton()">
      <a @click.stop="getFirstPage()">
        First
      </a>
    </li>

    <li v-if="showPreviousButton()">
      <a @click.stop="getPreviousPages()">
        <i class="fas fa-chevron-left" />
      </a>
    </li>

    <li v-for="page in pages" :key="page">
      <a
        @click.stop="goto(page)"
        :class="currentPage === page ? 'selected' : ''"
      >
        {{ page }}
      </a>
    </li>

    <li v-if="showNextButton()">
      <a @click.stop="getNextPages()">
        <i class="fas fa-chevron-right" />
      </a>
    </li>

    <li v-if="showLastButton()">
      <a @click.stop="getLastPage()">
        Last
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pager",
  props: {
    totalPageCount: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      pages: [],
      currentPage: 1,
      pageDevider: 5,
    };
  },
  methods: {
    showFirstButton() {
      return (
        this.currentPage > this.pageDevider &&
        this.totalPageCount > this.pageDevider
      );
    },
    showPreviousButton() {
      return this.currentPage > this.pageDevider;
    },
    showNextButton() {
      return (
        this.totalPageCount > this.pageDevider &&
        this.currentPage != this.totalPageCount
      );
    },
    showLastButton() {
      return (
        this.totalPageCount > this.pageDevider &&
        this.currentPage != this.totalPageCount
      );
    },
    calculatePageCount(begin, end) {
      let newPageList = [];

      for (let index = begin; index <= end; index++) {
        newPageList.push(index);
      }

      this.pages = newPageList;
    },
    getNextPages() {
      this.calculatePageCount(
        this.pages[this.pages.length - 1] + 1,
        this.pages[this.pages.length - 1] + this.pageDevider
      );

      this.goto(this.pages[this.pages.length - 1] + 1);
    },
    getPreviousPages() {
      this.calculatePageCount(
        this.pages[0] - this.pageDevider,
        this.pages[0] - 1
      );

      this.goto(this.pages[0] - 1);
    },
    getFirstPage() {
      this.calculatePageCount(1, this.pageDevider);
      this.goto(1);
    },
    getLastPage() {
      this.calculatePageCount(
        this.totalPageCount - this.pageDevider + 1,
        this.totalPageCount
      );
      this.goto(this.totalPageCount);
    },
    goto(page) {
      this.currentPage = page;
      this.$emit("goToPage", page);
    },
  },
  async mounted() {
    this.calculatePageCount(
      1,
      this.totalPageCount < this.pageDevider
        ? this.totalPageCount
        : this.pageDevider
    );
  },
};
</script>

<style>
.paging-wrapper {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
}

.paging-wrapper li a {
  padding: 10px 15px;
  background-color: #eee;
  border: 1px solid #ccc;
}

.paging-wrapper li a:hover,
.paging-wrapper li a.selected {
  background-color: #373b4f;
  color: white;
}
</style>
